export const fetchUppercaseText = text => {
    const promise = new Promise(
      (resolve, reject) => {
        setTimeout(() => {
          const uppercaseText = text.toUpperCase();
          resolve(uppercaseText);
          // You can also try to reject it 👇
          // reject(new Error('Oups, something is wrong here.'));
        }, 2000) //Try to change this number and see what's the impact 👨‍💻
      });

    return wrapPromise(promise);
  };

  // 🚨 Suspense integrations like Relay implement
  // a contract like this to integrate with React.
  // Real implementations can be significantly more complex.
  // Don't copy-paste this into your project!
  const wrapPromise = promise => {
    let status = 'pending';
    let result;
    let suspender = promise.then(
      res => {
        status = 'success';
        result = res;
      },
      err => {
        status = 'error';
        result = err;
      }
    );

    return {
      read() {
        if (status === 'pending') throw suspender;
        else if (status === 'error') throw result;
        else if (status === 'success') return result;
      }
    };
  };