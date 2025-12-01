function getURL(dataSet) {
    return dataSet.match(/https?:\/\/\S+/g) || [];
}

function greedyQuery(dataSet) {
    const urls = getURL(dataSet);
    const result = [];
    
    for (let i = 0; i < urls.length; i++) {
        const url = urls[i];
        const queryMatch = url.match(/\?([^# ]*)/);
        
        if (queryMatch) {
            console.log(queryMatch)
            const params = queryMatch[1].split('&');
            let count = 0;
            
            for (let j = 0; j < params.length; j++) {
                if (params[j].includes('=')) {
                    count++;
                }
            }
            
            if (count >= 3) {
                result.push(url);
            }
        }
    }
    
    return result;
}

function notSoGreedy(dataSet) {
    const urls = getURL(dataSet);
    const result = [];
    
    for (let i = 0; i < urls.length; i++) {
        const url = urls[i];
        const queryMatch = url.match(/\?([^# ]*)/);
        
        if (queryMatch) {
            const params = queryMatch[1].split('&');
            let count = 0;
            
            for (let j = 0; j < params.length; j++) {
                if (params[j].includes('=')) {
                    count++;
                }
            }
            
            if (count >= 2 && count <= 3) {
                result.push(url);
            }
        }
    }
    
    return result;
}
