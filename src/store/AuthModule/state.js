import JwtService from "@/common/jwt.service";

const state = {
  errors: null,
  user: {},
  isAuthenticated: !!JwtService.getToken(),
  isLoading: false
};

export default state;
