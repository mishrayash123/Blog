export const sendToken = (user, statusCode, message, res) => {
  const token = user.getJWTToken();
  const options = {
    expires: new Date(
      Date.now()+ 25892000000
    ),
    httpOnly: true,
    sameSite: 'None',
    secure: true,
  };
  res.status(statusCode).cookie("token", token, options).json({
    success: true,
    user,
    message,
    token,
  });
};
