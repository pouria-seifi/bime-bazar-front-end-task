export interface LabelValuePair {
  label: string;
  value: string;
}

export type LabelValuePairs = LabelValuePair[];

export interface IVehicleOwnerDetailsForm {
  nationalId: string;
  phoneNumber: string;
  addressId: string;
}

export interface IVehicleOwnerDetailsFormErrors {
  nationalIdError?: string;
  phoneNumberError?: string;
  addressIdError?: string;
  sumbitError?: boolean;
  sumbitErrorMessage?: string;
}

export interface IPostVehicleOwnerDetailsResult
  extends IVehicleOwnerDetailsForm {
  errors?: IVehicleOwnerDetailsFormErrors;
}

export interface Address {
  id: string;
  name: string;
  details: string;
}
