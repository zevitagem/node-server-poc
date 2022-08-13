const finder = function(data, context, findKey, compareKey) {
    var result = null;

    if (!compareKey) {
        compareKey = 'id';
    }

    if (data[context]) {
        data[context].forEach(function (value) {
            if (value[compareKey] == findKey) {
                result = value;
                return;
            }
        });
    }

    return result;
}

const appender = function (storage, data, context) {
    if (
        storage[context] && 
        Array.isArray(storage[context])
    ) {
        //storage[context].push(data)
    }
}

module.exports = {
    finder,
    appender
}