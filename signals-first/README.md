# 🎯 ProductCounterDashboard

> Formation avancée Angular 20 - Maîtriser les Signals

## 📚 But pédagogique

Ce projet est conçu comme un support pratique pour apprendre et maîtriser les **Signals Angular**, la nouvelle approche de gestion d'état réactive introduite dans Angular.

À travers une application concrète de gestion de panier, vous apprendrez à :

- ✅ Créer et manipuler des **signals** (`signal()`)
- ✅ Calculer des valeurs dérivées avec **computed**
- ✅ Réagir aux changements avec **effect**
- ✅ Utiliser les **signal inputs/outputs** (`@input()`, `@output()`)
- ✅ Gérer l'état global avec un **Signal Store**
- ✅ Intégrer RxJS avec les Signals via **toSignal()**

---

## 🏗️ Architecture de l'application

### Composants

#### 📦 **AppComponent** (`app.ts`)
Composant racine de l'application qui orchestre l'affichage :
- Affiche la liste des produits
- Affiche le récapitulatif du panier
- Coordonne les interactions entre les composants enfants

#### 🛍️ **ProductComponent** (`features/products/product.component.ts`)
Composant de présentation d'un produit individuel :
- Affiche les informations d'un produit (nom, prix)
- Contient un bouton "+" pour ajouter au panier
- Communique avec le parent via `@output()`

#### 🧮 **CartTotalComponent** (`features/cart/cart-total.component.ts`)
Composant d'affichage du résumé du panier :
- Affiche le nombre total d'articles
- Affiche le prix total
- Utilise des valeurs calculées (`computed`)

### Services et State Management

#### 🗄️ **CartStore** (`core/state/cart.store.ts`)
Service singleton qui gère l'état global du panier :
- Contient un `signal()` pour stocker les produits
- Expose des `computed()` pour les totaux
- Fournit des méthodes pour modifier l'état

#### 🌐 **ProductService** (`core/services/product.service.ts`)
Service qui simule les appels API :
- Méthode `getProducts$()` retournant un `Observable<Product[]>`
- Simule un délai réseau
- Sera intégré via `toSignal()` pour l'interopérabilité RxJS

### Modèles

#### 📋 **Product** (`core/models/product.model.ts`)
Interface TypeScript définissant la structure d'un produit :
```typescript
interface Product {
  id: number;
  name: string;
  price: number;
  quantity?: number;
}
```

---

## 🎓 Parcours de formation - Étapes à suivre

### 📍 **Étape 1 : Créer un signal products dans CartStore**
**Objectif :** Comprendre la création et l'initialisation d'un signal

- Créer un `signal<Product[]>([])` dans CartStore
- Implémenter une méthode `addProduct(product: Product)`
- Tester l'ajout manuel de produits

**Concepts abordés :** `signal()`, mutation d'état avec `update()` ou `set()`

---

### 📍 **Étape 2 : Afficher la liste des produits dans AppComponent**
**Objectif :** Consommer un signal dans un template

- Injecter CartStore dans AppComponent
- Afficher les produits avec `@for` dans le template
- Utiliser la syntaxe `products()` pour accéder aux valeurs

**Concepts abordés :** Injection de dépendances, lecture de signals dans les templates

---

### 📍 **Étape 3 : Ajouter les signaux computed pour totalItems et totalPrice**
**Objectif :** Calculer des valeurs dérivées automatiquement

- Créer un `computed()` pour calculer `totalItems`
- Créer un `computed()` pour calculer `totalPrice`
- Afficher ces totaux dans CartTotalComponent

**Concepts abordés :** `computed()`, réactivité automatique, optimisation des calculs

---

### 📍 **Étape 4 : Ajouter un effect() qui log les changements**
**Objectif :** Réagir aux changements de signals

- Créer un `effect()` dans CartStore
- Logger les modifications du panier dans la console
- Observer le comportement lors des ajouts

**Concepts abordés :** `effect()`, effets de bord, debug réactif

---

### 📍 **Étape 5 : Utiliser @input() et @output() dans ProductComponent**
**Objectif :** Maîtriser la communication parent-enfant avec les signal inputs/outputs

- Transformer ProductComponent pour recevoir un produit via `@input()`
- Émettre un événement via `@output()` lors du clic sur "+"
- Gérer l'événement dans AppComponent

**Concepts abordés :** `input()`, `output()`, communication composants

---

### 📍 **Étape 6 : Déplacer toute la logique métier dans CartStore**
**Objectif :** Centraliser l'état et respecter l'architecture

- Créer des méthodes publiques dans CartStore (`addToCart`, `removeFromCart`, etc.)
- Simplifier AppComponent en déléguant la logique au store
- Respecter le principe de séparation des responsabilités

**Concepts abordés :** Architecture applicative, single source of truth, encapsulation

---

### 📍 **Étape 7 : Charger les produits via ProductService avec toSignal()**
**Objectif :** Intégrer RxJS avec les Signals

- Implémenter la méthode `getProducts$()` dans ProductService
- Utiliser `toSignal()` pour convertir l'Observable en signal
- Gérer les états de chargement (loading, error)

**Concepts abordés :** `toSignal()`, interopérabilité RxJS/Signals, gestion asynchrone

---

## 🧠 Ce que vous apprendrez

| Compétence | Description |
|------------|-------------|
| **✅ Comprendre les Signals Angular** | Maîtriser la nouvelle API réactive d'Angular : `signal()`, `computed()`, `effect()` |
| **✅ Repenser la gestion d'état** | Abandonner les approches complexes (NgRx, BehaviorSubject) au profit d'une solution native et simple |
| **✅ Architecture réactive maintenable** | Construire une application scalable avec une séparation claire des responsabilités |
| **✅ Interopérabilité RxJS** | Intégrer harmonieusement RxJS et Signals dans une même application |
| **✅ Communication composants** | Utiliser les nouveaux `input()` et `output()` basés sur les Signals |
| **✅ Performance optimisée** | Comprendre comment Angular optimise les re-rendus avec les Signals |

---

## 🚀 Démarrage rapide

### Prérequis
- Node.js 18+
- Angular CLI 20+

### Installation

```bash
# Installer les dépendances
npm install

# Démarrer le serveur de développement
npm start

# Compiler le projet
npm run build
```

L'application sera accessible sur `http://localhost:4200`

---

## 📖 Ressources complémentaires

- [Documentation officielle Angular Signals](https://angular.dev/guide/signals)
- [RxJS Interop Guide](https://angular.dev/guide/rxjs-interop)
- [Angular 20 Release Notes](https://github.com/angular/angular/releases)

---

**Bonne formation ! 🎓**
