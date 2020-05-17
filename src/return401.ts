export default (res, options) => {
  console.error('authorisationMiddleware 401');
  if (options.challenge) {
    res.set('WWW-Authenticate', 'Basic realm="' + options.challenge + '"');
  }
  return res.status(401).send();
};
