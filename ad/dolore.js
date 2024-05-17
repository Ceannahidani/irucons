} else {
  // Handle the case where the user has not provided a value for the 'name' parameter.
  console.error(new Error("Missing parameter: 'name' is required."));
  process.exitCode = 1;
}
