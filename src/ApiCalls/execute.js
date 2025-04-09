export const executeCode = async (language, version, input, code) => {
    try {
        const response = await fetch('https://emkc.org/api/v2/piston/execute', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                language: language,
                version: version,
                files: [{ content: code }],
                stdin: input,
                args: [],
                compile_timeout: 10000,
                run_timeout: 3000,
                compile_memory_limit: -1,
                run_memory_limit: -1
            }),
        });

        const data = await response.json();

        return data;
    } catch (error) {
        console.error("Execution Error:", error);
        return { error: "Execution failed" };
    }
};
