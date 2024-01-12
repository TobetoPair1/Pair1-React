import axiosInstance from "../utils/interceptors/axiosInterceptors";

class AuthService {
	login(loginModel: any) {
		return axiosInstance.post("auth/login", loginModel);
	}
}
const authService = new AuthService();
export default authService;
