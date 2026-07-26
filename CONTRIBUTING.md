# Cómo contribuir al CodePonce Playground

Gracias por querer contribuir 🎉 Este documento describe el flujo completo para participar.

---

## 📋 Flujo de contribución

```text
1. Elegí un Issue
       ↓
2. Asignátelo (comentá "Me interesa")
       ↓
3. Forkeá el repo (si no lo hiciste)
       ↓
4. Cloná tu fork localmente
       ↓
5. Creá una branch con el formato correcto
       ↓
6. Resolvé el desafío
       ↓
7. Agregá tu firma en signatures/level-N.md
       ↓
8. Commit con conventional commit
       ↓
9. Push a tu fork
       ↓
10. Abrí un Pull Request
       ↓
11. Esperá la review
       ↓
12. ¡PR mergeado! 🎉
```

---

## 🌳 Convención de nombres para branches

```
feature/{tu-usuario-github}-issue-{numero-del-issue}
```

Ejemplos:
- `feature/juanperez-issue-23`
- `feature/maria123-issue-5`

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
Sí, pero con branches separadas. Un branch = un Issue.

**¿Qué hago si alguien ya está trabajando en el Issue que quiero?**
Buscá otro Issue. Podés filtrar por `good-first-issue` o `difficulty: beginner`.

**¿Qué pasa si mi PR tiene conflictos?**
No te preocupes, es parte del aprendizaje. Resolvelos localmente con `git merge master` y actualizá tu PR. Si necesitás ayuda, preguntá en el PR mismo.

**¿Puedo pedir review a un compañero?**
Sí. Mencioná a otro contributor en tu PR y pedile que revise.
