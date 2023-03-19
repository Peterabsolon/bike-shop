export const DRIVE_TYPES = ['manual', 'electric'] as const
export type TDriveType = typeof DRIVE_TYPES[number]

export const WHEEL_SIZES = ['26"', '27.5"', '29"'] as const
export type TWheelSize = typeof WHEEL_SIZES[number]

export const RIDER_TYPES = ['male', 'female', 'child'] as const
export type TRiderType = typeof RIDER_TYPES[number]

export const MATERIALS = ['aluminium', 'carbon'] as const
export type TMaterial = typeof MATERIALS[number]

// export const DRIVE_TYPES = ['manual', 'electric'] as const
// export type TDriveType = typeof DRIVE_TYPES[number]
