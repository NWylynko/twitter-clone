import { credential, type ServiceAccount } from "firebase-admin";
import { initializeApp } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";
import serviceAccount from "../../firebase-service-account.json";

export const firebase = initializeApp({
  credential: credential.cert(serviceAccount as ServiceAccount)
});

export const auth = getAuth(firebase);

console.log({
  firebase,
  auth
})