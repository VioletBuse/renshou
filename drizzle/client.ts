
import {drizzle} from "drizzle-orm/expo-sqlite";
import {openDatabaseSync} from "expo-sqlite/next";

const expo = openDatabaseSync("renshou.db");

export const db = drizzle(expo);
