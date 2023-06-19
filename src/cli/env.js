const parseEnv = () => {
  for (let foo in process.env) {
    if (/^RSS_/.test(foo)) {
      console.log(`${foo}=${process.env[foo]};`);
    }
  }
};
parseEnv();