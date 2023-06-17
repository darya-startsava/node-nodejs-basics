const parseArgs = () => {
  const args = process.argv;
  for (let i = 0; i < args.length; i++) {
    if (/^--/.test(args[i])) {
      console.log(`${args[i].slice(2)} is ${args[i + 1]}`);
      i++;
    }
  }
};

parseArgs();