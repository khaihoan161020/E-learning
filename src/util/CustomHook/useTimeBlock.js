import React, { useEffect, useState, useCallback } from 'react'

const TimeBlock = (second) => {
    const [time, setTime] = useState(second)
    const [flag, setFlag] = useState(false)
    useEffect(() => {
        const sleepTime = setTimeout(() => setTime(prev => prev - 1), 1000)
        if(time === 0) {
            clearTimeout(sleepTime)
            setFlag(true)
        }
            

        return () => {
            clearTimeout(sleepTime);
            };
    }, [time])
    return [time, setTime, flag, setFlag]
}

export default TimeBlock