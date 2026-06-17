/**
 * Enlaces y valores configurables de la landing.
 * Centralizados aquí para facilitar el mantenimiento y despliegue.
 */

// Enlace profundo que abre la aplicación dentro de Expo Go.
export const EXPO_APP_URL =
  "exp://u.expo.dev/48a8449f-01ad-40c3-a1d5-41e3e24a7de6/group/45a6bf3e-1188-4fd6-90b8-21477d3ac61f";

// Enlaces de descarga de Expo Go (placeholders configurables).
export const EXPO_GO_ANDROID_URL =
  "https://play.google.com/store/apps/details?id=host.exp.exponent";
export const EXPO_GO_IOS_URL =
  "https://apps.apple.com/app/expo-go/id982107779";

// Datos de contacto.
export const CONTACT_EMAIL = "hola@cresimotion.com";

// ID de medición de Google Analytics 4 (configurable vía variable de entorno).
export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID ?? "";

// Respuesta editable para la pregunta de cuenta en el FAQ.
export const FAQ_ACCOUNT_ANSWER =
  "El acceso es por invitación con tu correo previamente autorizado, así que no necesitas registrarte. Dentro de la aplicación podrás guardar tu progreso de forma sencilla.";
