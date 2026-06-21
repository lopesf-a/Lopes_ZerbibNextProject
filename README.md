# Next.js Streaming Dashboard

Nom et prénom de l’élève : Lopes François-Alexian

## Objectif

Ce projet implémente un dashboard analytique en Next.js avec :

- App Router uniquement (`/app`)
- Server Components pour les blocs de données
- aucun `use client` sur les composants de données
- aucun `useEffect` ni fetch côté client pour les données principales
- Suspense avec boundaries granulaires
- skeleton loaders personnalisés par bloc
- fetchs indépendants, sans `Promise.all` global au niveau de la page
- erreur simulée et isolée sur le bloc des commentaires

## Lancer le projet

```bash
npm install
npm run dev
```

Puis ouvrir :

```txt
http://localhost:3000/dashboard
```

## Architecture

```txt
app/
  dashboard/
    layout.tsx
    page.tsx
    @users/page.tsx
    @users/error.tsx
    @posts/page.tsx
    @posts/error.tsx
    @todos/page.tsx
    @todos/error.tsx
    @comments/page.tsx
    @comments/error.tsx
components/
  blocks/
  skeletons/
lib/
  api.ts
  types.ts
```

## Délais simulés

- UsersBlock : `/users` avec délai de 1 000 ms
- PostsBlock : `/posts` avec délai de 2 000 ms, puis affichage des 10 premiers
- TodosBlock : `/todos?userId=1` avec délai de 3 000 ms
- CommentsBlock : `/comments?postId=1` avec délai de 1 500 ms puis erreur simulée

## Vérification attendue

Au chargement de `/dashboard`, les skeletons apparaissent immédiatement. Ensuite :

1. le bloc utilisateurs apparaît vers 1 seconde ;
2. le bloc commentaires affiche son erreur isolée vers 1,5 seconde ;
3. le bloc posts apparaît vers 2 secondes ;
4. le bloc todos apparaît vers 3 secondes.

L’erreur du bloc commentaires ne bloque pas les trois autres blocs.
