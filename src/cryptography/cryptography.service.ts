import { Injectable } from "@nestjs/common"
import * as bcrypt from "bcrypt"

@Injectable()
export class CryptographyService {
  public async hash(value: string): Promise<string> {
    const salt = await bcrypt.genSalt()
    const hash = await bcrypt.hash(value, salt)
    return hash
  }

  public async compare(value: string, hash: string): Promise<boolean> {
    const isValid = await bcrypt.compare(value, hash)
    return isValid
  }
}
