# First Expo Router App

## Objective

Set up the first mobile application using the Expo Router template and understand the file structure of a React Native app.

## Steps Followed

1. Navigated to the parent directory:

   ```bash
   cd prodev-mobile-setup

    Initialized a new Expo project with Router template:
   ```

npx create-expo-app@latest .

Selected the Expo Router (TypeScript) template.

Modified the Home Screen:

    Edited app/(tabs)/index.tsx

    Changed text from Welcome! to:

    <Text>** First App Created**</Text>

Started the development server:

npx expo start

    Scanned the QR code with Expo Go app to preview on mobile.

Reset the project with:

    npm run reset-project

Observations

    The initial scaffold created the following structure:

        app/ → contains all screens and navigation logic.

        app/(tabs)/index.tsx → default home screen.

        constants/Colors.tsx → stores color themes.

    Running npm run reset-project:

        Cleared cache and dependencies.

        Reinstalled node_modules.

        Restored the project to a clean state (like freshly scaffolded).

Files Modified

    app-example/app/(tabs)/index.tsx

    app-example/constants/Colors.tsx

Next Steps

    Explore routing features inside app/.

    Learn how to add more tabs and customize navigation.
