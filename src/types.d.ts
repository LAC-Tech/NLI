/**
 * @module types
 */
import type { Latitude, Longitude } from "./geography.js"
export type Point = { lat: Latitude; long: Longitude }
export type Elevation = { storey: number } | { groundLevel: number }
export type StoreyNLI = Point & { storey: number }
export type GroundLevelNLI = Point & { groundLevel: number }
export type NLI = StoreyNLI | GroundLevelNLI
