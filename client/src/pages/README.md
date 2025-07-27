# Pages Structure

This structure contains all the pages of the Chef Savannah Cole application.

## Organization

- `Home.tsx` - Page d'accueil avec le quiz principal
- `not-found.tsx` - Page 404
- Futures pages seront ajoutées ici

## Routing

L'application utilise [wouter](https://github.com/molefrog/wouter) pour la gestion des routes.

```tsx
// Example d'ajout d'une nouvelle route dans App.tsx
<Route path="/profile" component={Profile} />
```