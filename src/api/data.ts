// TODO: Generate

import { TDriveType, TRiderType, TWheelSize } from './enums'

export interface IBike {
  id: string

  driveType: TDriveType
  wheelSize: TWheelSize
  riderType: TRiderType
}
