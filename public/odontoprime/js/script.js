/* =========================================================
   OdontoPrime — script.js
   Interações da landing page (JS puro, sem dependências):
   navbar, menu mobile, reveal on scroll, slider de depoimentos,
   comparador antes/depois, FAQ, aviso de portfólio e formulário.

   O conteúdo (listas, FAQ, depoimentos…) é renderizado no servidor
   a partir de src/content/odontoprime.ts; este arquivo apenas o aprimora.

   API: window.OdontoPrime.init() → função de limpeza (remove listeners,
   observers e timers). Seguro para Strict Mode / remontagem da rota.
   ========================================================= */
(function () {
  "use strict";

  if (window.OdontoPrime) return;

  const FORM_ENDPOINT = "/api/contact"; // o destino real fica no servidor (CONTACT_WEBHOOK_URL)
  const FORM_TIMEOUT_MS = 15000;

  const $ = (sel, ctx) => (ctx || document).querySelector(sel);
  const $$ = (sel, ctx) => Array.from((ctx || document).querySelectorAll(sel));
  const clamp = (n, min, max) => Math.min(Math.max(n, min), max);

  function init() {
    const ac = new AbortController();
    const { signal } = ac;
    const on = (target, type, handler, options) =>
      target.addEventListener(type, handler, Object.assign({}, options, { signal }));
    const cleanups = [];

    /* ------------------ Navbar + menu mobile ------------------ */
    const nav = $("#nav");
    const burger = $("#burger");
    const mobileMenu = $("#mobileMenu");

    if (nav) {
      const onScroll = () => nav.classList.toggle("is-stuck", window.scrollY > 16);
      onScroll();
      on(window, "scroll", onScroll, { passive: true });
    }

    if (burger && mobileMenu) {
      const setMenu = (open) => {
        burger.setAttribute("aria-expanded", String(open));
        burger.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
        mobileMenu.hidden = !open;
      };
      on(burger, "click", () => setMenu(burger.getAttribute("aria-expanded") !== "true"));
      on(mobileMenu, "click", (e) => {
        if (e.target.closest("a")) setMenu(false);
      });
      on(document, "keydown", (e) => {
        if (e.key === "Escape" && burger.getAttribute("aria-expanded") === "true") {
          setMenu(false);
          burger.focus();
        }
      });
      // Ao ampliar a janela para o layout desktop o menu mobile deixa de existir.
      const desktop = window.matchMedia("(min-width: 900px)");
      on(desktop, "change", (e) => {
        if (e.matches) setMenu(false);
      });
    }

    /* ------------------ Reveal on scroll ------------------ */
    const revealEls = $$(".reveal");
    const timers = [];
    if ("IntersectionObserver" in window) {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            const target = entry.target;
            target.classList.add("is-visible");
            io.unobserve(target);
            // O atraso escalonado só vale para a entrada; depois é removido para
            // não atrasar as transições de hover do próprio elemento.
            timers.push(setTimeout(() => (target.style.transitionDelay = ""), 1100));
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
      );
      revealEls.forEach((n, i) => {
        n.style.transitionDelay = `${Math.min(i % 4, 3) * 70}ms`;
        io.observe(n);
      });
      cleanups.push(() => io.disconnect());
    } else {
      revealEls.forEach((n) => n.classList.add("is-visible"));
    }
    cleanups.push(() => timers.forEach(clearTimeout));

    /* ------------------ Slider de depoimentos ------------------ */
    const track = $("#testimonials");
    const dotsHost = $("#tDots");
    const prevBtn = $("#tPrev");
    const nextBtn = $("#tNext");

    if (track && dotsHost && prevBtn && nextBtn) {
      const slides = track.children.length;
      let index = 0;
      let dotCount = -1;

      $$("img", track).forEach((img) => (img.draggable = false));

      const perView = () => (window.innerWidth >= 900 ? 3 : window.innerWidth >= 640 ? 2 : 1);
      const maxIndex = () => Math.max(0, slides - perView());

      const buildDots = () => {
        const count = maxIndex() + 1;
        if (count === dotCount) return;
        dotCount = count;
        dotsHost.textContent = "";
        for (let i = 0; i < count; i++) {
          const b = document.createElement("button");
          b.type = "button";
          b.className = "dot";
          b.setAttribute("aria-label", `Ir para o depoimento ${i + 1}`);
          b.addEventListener("click", () => goTo(i), { signal });
          dotsHost.appendChild(b);
        }
      };
      const update = () => {
        track.style.transform = `translateX(-${index * (100 / perView())}%)`;
        Array.from(dotsHost.children).forEach((d, i) => {
          d.classList.toggle("is-active", i === index);
          if (i === index) d.setAttribute("aria-current", "true");
          else d.removeAttribute("aria-current");
        });
        prevBtn.disabled = index <= 0;
        nextBtn.disabled = index >= maxIndex();
      };
      const goTo = (i) => {
        index = clamp(i, 0, maxIndex());
        update();
      };

      buildDots();
      update();
      on(prevBtn, "click", () => goTo(index - 1));
      on(nextBtn, "click", () => goTo(index + 1));
      on(window, "resize", () => {
        index = Math.min(index, maxIndex());
        buildDots();
        update();
      });

      // Arrastar/deslizar (touch e mouse); botões e dots continuam disponíveis.
      let dragging = false;
      let startX = 0;
      let deltaX = 0;
      let width = 1;

      on(track, "pointerdown", (e) => {
        if (e.pointerType === "mouse" && e.button !== 0) return;
        dragging = true;
        startX = e.clientX;
        deltaX = 0;
        width = track.getBoundingClientRect().width || 1;
        track.style.transition = "none";
        try {
          track.setPointerCapture(e.pointerId);
        } catch {
          /* ponteiro já encerrado */
        }
      });
      on(track, "pointermove", (e) => {
        if (!dragging) return;
        deltaX = e.clientX - startX;
        const base = -index * (100 / perView());
        track.style.transform = `translateX(${base + (deltaX / width) * 100}%)`;
      });
      const endDrag = () => {
        if (!dragging) return;
        dragging = false;
        track.style.transition = "";
        const threshold = width * 0.18;
        if (deltaX < -threshold) goTo(index + 1);
        else if (deltaX > threshold) goTo(index - 1);
        else update();
      };
      on(track, "pointerup", endDrag);
      on(track, "pointercancel", endDrag);
    }

    /* ------------------ Antes e depois ------------------ */
    $$(".ba__viewport").forEach((view) => {
      const after = $(".ba__after", view);
      const handle = $(".ba__handle", view);
      if (!after || !handle) return;
      let dragging = false;
      let pos = 50;

      $$("img", view).forEach((img) => (img.draggable = false));

      const setPos = (pct) => {
        pos = clamp(pct, 2, 98);
        after.style.clipPath = `inset(0 0 0 ${pos}%)`;
        handle.style.left = `${pos}%`;
        const p = Math.round(pos);
        handle.setAttribute("aria-valuenow", String(p));
        handle.setAttribute("aria-valuetext", `${p}% antes, ${100 - p}% depois`);
      };
      const fromPointer = (clientX) => {
        const rect = view.getBoundingClientRect();
        setPos(((clientX - rect.left) / rect.width) * 100);
      };

      on(view, "pointerdown", (e) => {
        if (e.pointerType === "mouse" && e.button !== 0) return;
        dragging = true;
        try {
          view.setPointerCapture(e.pointerId);
        } catch {
          /* ponteiro já encerrado */
        }
        fromPointer(e.clientX);
      });
      on(view, "pointermove", (e) => {
        if (dragging) fromPointer(e.clientX);
      });
      const stop = () => (dragging = false);
      on(view, "pointerup", stop);
      on(view, "pointercancel", stop);

      // Acesso por teclado: o divisor é um slider focável.
      on(handle, "keydown", (e) => {
        const steps = {
          ArrowLeft: -5,
          ArrowDown: -5,
          ArrowRight: 5,
          ArrowUp: 5,
          PageDown: -10,
          PageUp: 10,
        };
        if (e.key in steps) setPos(pos + steps[e.key]);
        else if (e.key === "Home") setPos(0);
        else if (e.key === "End") setPos(100);
        else return;
        e.preventDefault();
      });
    });

    /* ------------------ FAQ (acordeão) ------------------ */
    const faqList = $("#faqList");
    if (faqList) {
      const closeItem = (item) => {
        item.classList.remove("is-open");
        $(".faq__a", item).style.maxHeight = "";
        $(".faq__q", item).setAttribute("aria-expanded", "false");
      };
      on(faqList, "click", (e) => {
        const btn = e.target.closest(".faq__q");
        if (!btn) return;
        const item = btn.closest(".faq__item");
        const wasOpen = item.classList.contains("is-open");
        $$(".faq__item.is-open", faqList).forEach(closeItem);
        if (!wasOpen) {
          item.classList.add("is-open");
          $(".faq__a", item).style.maxHeight = `${$(".faq__a", item).scrollHeight}px`;
          btn.setAttribute("aria-expanded", "true");
        }
      });
      // Reajusta a altura do painel aberto quando o texto reflui (resize/rotação).
      on(window, "resize", () => {
        const open = $(".faq__item.is-open .faq__a", faqList);
        if (open) open.style.maxHeight = `${open.scrollHeight}px`;
      });
    }

    /* ------------------ Aviso de portfólio ------------------ */
    const notice = $("#portfolio-notice");
    const noticeClose = $("[data-portfolio-notice-close]");
    if (notice && noticeClose) {
      // `hidden` (em vez de remover o nó) mantém o DOM gerenciado pelo React intacto.
      on(noticeClose, "click", () => {
        notice.hidden = true;
      });
    }

    /* ------------------ Formulário ------------------ */
    const form = $("#contactForm");
    if (form) {
      const note = $("#formNote");
      const submitBtn = form.querySelector('button[type="submit"]');
      const submitLabel = submitBtn ? submitBtn.textContent : "";
      let sending = false;
      let inflight = null;
      cleanups.push(() => inflight && inflight.abort());

      const rules = {
        nome: (v) => (v.trim().length < 3 ? "Informe seu nome completo." : ""),
        telefone: (v) => {
          const d = v.replace(/\D/g, "");
          return d.length < 10 || d.length > 11 ? "Informe um telefone válido com DDD." : "";
        },
        email: (v) =>
          /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()) ? "" : "Informe um e-mail válido.",
      };

      const setError = (input, message) => {
        const field = input.closest(".field");
        field.classList.toggle("has-error", Boolean(message));
        input.setAttribute("aria-invalid", message ? "true" : "false");
        $(`[data-error-for="${input.name}"]`, field).textContent = message || "";
        return !message;
      };
      const validateField = (name) => setError(form[name], rules[name](form[name].value));
      const validate = () => {
        // Valida todos (sem curto-circuito) e devolve o primeiro campo inválido.
        const invalid = Object.keys(rules).filter((name) => !validateField(name));
        return invalid.length ? form[invalid[0]] : null;
      };
      const say = (message, isError) => {
        note.textContent = message;
        note.classList.toggle("form-note--error", Boolean(isError));
      };

      // Máscara simples de telefone brasileiro
      on(form.telefone, "input", (e) => {
        const d = e.target.value.replace(/\D/g, "").slice(0, 11);
        e.target.value =
          d.length > 10
            ? `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`
            : d.length > 6
              ? `(${d.slice(0, 2)}) ${d.slice(2, 6)}-${d.slice(6)}`
              : d.length > 2
                ? `(${d.slice(0, 2)}) ${d.slice(2)}`
                : d;
      });

      // Valida cada campo ao sair dele, mas só depois de preenchido ou de já ter erro.
      Object.keys(rules).forEach((name) => {
        on(form[name], "blur", () => {
          if (
            form[name].value.trim() ||
            form[name].closest(".field").classList.contains("has-error")
          ) {
            validateField(name);
          }
        });
        on(form[name], "input", () => {
          if (form[name].closest(".field").classList.contains("has-error")) validateField(name);
        });
      });

      on(form, "submit", async (e) => {
        e.preventDefault();
        if (sending) return;
        say("", false);
        const firstInvalid = validate();
        if (firstInvalid) {
          firstInvalid.focus();
          return;
        }

        sending = true;
        submitBtn.disabled = true;
        submitBtn.textContent = "Enviando…";
        form.setAttribute("aria-busy", "true");
        inflight = new AbortController();
        const timeout = setTimeout(() => inflight.abort(), FORM_TIMEOUT_MS);

        try {
          const res = await fetch(FORM_ENDPOINT, {
            method: "POST",
            headers: { "Content-Type": "application/json", Accept: "application/json" },
            body: JSON.stringify({
              nome: form.nome.value,
              telefone: form.telefone.value,
              email: form.email.value,
              mensagem: form.mensagem.value,
              website: form.website ? form.website.value : "",
            }),
            signal: inflight.signal,
          });
          const data = await res.json().catch(() => ({}));

          if (res.ok && data.ok) {
            say(
              data.demo
                ? "Solicitação recebida em modo demonstração — nenhum dado foi enviado nem salvo."
                : "Solicitação enviada! Entraremos em contato em breve.",
              false,
            );
            form.reset();
            Object.keys(rules).forEach((name) => setError(form[name], ""));
          } else if (res.status === 422 && data.fields) {
            let first = null;
            Object.keys(rules).forEach((name) => {
              if (data.fields[name]) {
                setError(form[name], data.fields[name]);
                first = first || form[name];
              }
            });
            if (first) first.focus();
            say("Revise os campos destacados e tente novamente.", true);
          } else {
            say("Não foi possível enviar agora. Tente novamente ou fale pelo WhatsApp.", true);
          }
        } catch {
          say("Não foi possível enviar agora. Tente novamente ou fale pelo WhatsApp.", true);
        } finally {
          clearTimeout(timeout);
          inflight = null;
          sending = false;
          submitBtn.disabled = false;
          submitBtn.textContent = submitLabel;
          form.removeAttribute("aria-busy");
        }
      });
    }

    window.__odontoprimeReady = true;

    return () => {
      ac.abort();
      cleanups.forEach((fn) => fn());
      window.__odontoprimeReady = false;
    };
  }

  window.OdontoPrime = { init };
})();
