export class CreateUserDto {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    country?: string;
    city?: string;
    address?: string;
    phoneNumber?: string;
    profilePicture?: string;
    role?: string
    }