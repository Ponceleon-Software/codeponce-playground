# Cómo contribuir al CodePonce Playground

Gracias por querer contribuir 🎉 Este documento describe el flujo completo para participar.

---

## 📋 Flujo de contribución (principiante)

Si es tu primera vez contribuyendo a un proyecto open source, empezá por aquí:

```text
1. Elegí un Issue
       ↓
2. Asignátelo (comentá "Me interesa")
       ↓
3. Forkeá el repo
       ↓
4. Cloná tu fork localmente
       ↓
5. Resolvé el desafío
       ↓
6. Agregá tu firma en signatures/level-N.md
       ↓
7. Commit con conventional commit
       ↓
8. Push a tu fork
       ↓
9. Abrí un Pull Request
       ↓
10. Esperá la review
       ↓
11. ¡PR mergeado! 🎉
```

> 💡 **¿No sabés qué es un fork, clone o PR?** Completá las clases de la [App CodePonce](https://codeponce.app) empezando por la **Clase 00 — ¿Qué es GitHub?**. Ahí vas a aprender cada concepto paso a paso.

### 📋 Flujo con ramas (avanzado)

Si ya dominás el flujo básico y querés usar ramas:

```text
1. Elegí un Issue → Asignátelo → Fork → Clone
2. Creá una branch: feature/{tu-usuario-github}-issue-{N}
3. Resolvé el desafío en tu branch
4. Commit → Push → PR desde tu branch
```

---

## 🌳 Convención de nombres para branches

```
feature/{tu-usuario-github}-issue-{numero-del-issue}
```

Ejemplos:
- `feature/juanperez-issue-23`
- `feature/maria123-issue-5`

> 💡 **Principiante:** Trabajá directamente en `main`. Las ramas son para cuando ya te sientas cómodo con el flujo básico.

---

## 💬 Formato de commits

Usamos [Conventional Commits](https://www.conventionalcommits.org/).

```
feat: agrega tabla de precios a la sección features
fix: corrige el layout responsive del header
docs: actualiza README con instrucciones de fork
refactor: convierte sección hero a componentes React
style: ajusta colores y espaciado del footer
chore: agrega archivo de firmas level-3
```

---

## 🔍 Cómo abrir un Pull Request

1. Andá a tu fork en GitHub
2. Click en **"Contribute" → "Open Pull Request"**
3. Completá el template con:
   - **Qué cambia**: Descripción breve de lo que hiciste
   - **Cómo probar**: Pasos para verificar el cambio
   - **Issue relacionado**: `Closes #N`
   - **Nivel**: `level-1`, `level-2`, etc.
   - **Screenshots**: Si aplica
4. Click en **"Create Pull Request"**

### Tips para un buen PR

- Hacé un solo cambio por PR
- Describí **qué** cambiaste y **por qué**
- Si tu PR resuelve un Issue, incluí `Closes #N` en la descripción
- Revisá que tu código no rompa nada existente

---

## ✅ Código de conducta

Este proyecto sigue un [Código de Conducta](./CODE_OF_CONDUCT.md). Al participar, aceptás cumplirlo.

---

## ❓ Preguntas frecuentes

**¿Puedo trabajar en más de un Issue a la vez?**
Sí, pero con branches separadas (o commits separados en `main`). Una tarea = un PR.

**¿Qué hago si alguien ya está trabajando en el Issue que quiero?**
Buscá otro Issue. Podés filtrar por `good-first-issue` o `difficulty: beginner`.

**¿Qué pasa si mi PR tiene conflictos?**
No te preocupes, es parte del aprendizaje. Resolvelos localmente con `git pull upstream main` y actualizá tu PR. Si necesitás ayuda, preguntá en el PR mismo.

**¿Puedo pedir review a un compañero?**
Sí. Mencioná a otro contributor en tu PR y pedile que revise.

**¿Necesito usar branches?**
No al principio. Podés trabajar directamente en `main`. Las ramas se recomiendan cuando trabajes en múltiples tareas a la vez. La **Clase 16** de la app enseña ramas cuando estés listo.
