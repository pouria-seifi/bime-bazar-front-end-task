export interface ILabelValuePair {
  label: string;
  value: string;
}

export type ILabelValuePairs = ILabelValuePair[];

export interface IVehicleOwnerDetailsForm {
  nationalId: string;
  phoneNumber: string;
  addressId: string;
}

export interface IVehicleOwnerDetailsFormErrors {
  nationalIdError?: string;
  phoneNumberError?: string;
  addressIdError?: string;
  isBackendError?: boolean;
}

export interface IPostVehicleOwnerDetailsResponse {
  success: boolean;
  message: string;
  errors?: IVehicleOwnerDetailsFormErrors;
}

export interface IAddress {
  id: string;
  name: string;
  details: string;
}
