# First Expo Router App

## Objective

Set up the first mobile application using the Expo Router template. Document the scaffolding process and understand the file structure of a React Native application using Expo.

## Steps Followed

1. Navigated to the parent project directory:
   ```bash
   cd prodev-mobile-setup
   ```

````

2. Initialized a new Expo project using the Router template:

   ```bash
   npx create-expo-app@latest .
   ```
3. Selected the **Expo Router (TypeScript)** template during setup.
4. Modified the Home Screen:

   * Opened `app/(tabs)/index.tsx`.
   * Changed the default text from:

     ```tsx
     <Text>Welcome!</Text>
     ```

     to:

     ```tsx
     <Text>** First App Created**</Text>
     ```
5. Ran the development server:

   ```bash
   npx expo start
   ```

   * For iOS → Scanned the QR code with the Camera app.
   * For Android → Scanned the QR code with the Expo Go app.
6. Reset the project to observe behavior:

   ```bash
   npm run reset-project
   ```

## Observations

* The scaffolded project created the following structure:

  * `app/` → Holds screens and routes.
  * `app/(tabs)/index.tsx` → Default home screen.
  * `constants/Colors.tsx` → Defines color themes.
* Running `npm run reset-project`:

  * Cleared caches and reinstalled dependencies.
  * Restored the project to a clean state, similar to a fresh scaffold.

## Challenges Faced

* Had to ensure both phone and laptop were on the same Wi-Fi network for QR scanning.
* Resetting took time as all dependencies were reinstalled.

## Next Steps

* Explore adding more screens with Expo Router.
* Customize navigation and themes using the `constants/Colors.tsx` file.
````
