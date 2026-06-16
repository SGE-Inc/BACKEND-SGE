export type TCompare = (data: string, encrypted: string) => Promise<boolean>
export type THash = (data: string, saltOrRounds: string | number) => Promise<string>;

export type THashProviderImp = (password: string) => Promise<string>
export type THashProvider = (hash: THash) => THashProviderImp

export type TComapreProviderImp = (toComparePassword: string, encryptedPassword: string) => Promise<boolean>
export type TCompareProvider = (hash: TCompare) => TComapreProviderImp
