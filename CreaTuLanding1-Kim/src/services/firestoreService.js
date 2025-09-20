// src/services/firestoreService.js
import { db } from "../firebaseConfig";
import {
  collection,
  getDocs,
  doc,
  getDoc,
  query,
  where,
  addDoc,
  serverTimestamp,
  setDoc
} from "firebase/firestore";

/**
 * Obtener todos los productos o por categoría.
 * categoryId es opcional (string).
 */
export async function fetchProducts(categoryId = null) {
  try {
    const colRef = collection(db, "products");
    if (categoryId) {
      // usamos where para filtrar por category
      const q = query(colRef, where("category", "==", categoryId));
      const snap = await getDocs(q);
      return snap.docs.map(d => ({ id: d.id, ...d.data() }));
    } else {
      const snap = await getDocs(colRef);
      return snap.docs.map(d => ({ id: d.id, ...d.data() }));
    }
  } catch (err) {
    console.error("fetchProducts error:", err);
    throw err;
  }
}

/**
 * Obtener producto por id (docId)
 */
export async function fetchProductById(id) {
  try {
    const docRef = doc(db, "products", id);
    const docSnap = await getDoc(docRef);
    if (!docSnap.exists()) return null;
    return { id: docSnap.id, ...docSnap.data() };
  } catch (err) {
    console.error("fetchProductById error:", err);
    throw err;
  }
}

/**
 * Crear una orden en la colección 'orders'.
 * order = { buyer: {...}, items: [...], total: number }
 * Retorna el id del documento creado.
 */
export async function createOrder(order) {
  try {
    const colRef = collection(db, "orders");
    const docRef = await addDoc(colRef, {
      ...order,
      createdAt: serverTimestamp(),
    });
    return docRef.id;
  } catch (err) {
    console.error("createOrder error:", err);
    throw err;
  }
}

/**
 * Opcional: setDoc con ID específico (útil para seed con ids predecibles)
 * setProductWithId('1', productObj)
 */
export async function setProductWithId(id, productObj) {
  try {
    await setDoc(doc(db, "products", String(id)), productObj);
  } catch (err) {
    console.error("setProductWithId error:", err);
    throw err;
  }
}
