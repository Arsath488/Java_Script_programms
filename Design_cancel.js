/**
 * @param {Generator} generator
 * @return {[Function, Promise]}
 */
var cancellable = function(generator) {
    let cancel;
    const cancelPromise = new Promise((_, reject) => {
        cancel = () => reject("Cancelled");
    });

    const promise = (async () => {
        let nextValue;
        let isError = false;

        while (true) {
            try {
                
                const step = isError 
                    ? generator.throw(nextValue) 
                    : generator.next(nextValue);

                if (step.done) return step.value;

                
                try {
                    nextValue = await Promise.race([step.value, cancelPromise]);
                    isError = false;
                } catch (err) {
                    
                    nextValue = err;
                    isError = true;
                }
            } catch (err) {
               
                throw err;
            }
        }
    })();

    return [cancel, promise];
};
