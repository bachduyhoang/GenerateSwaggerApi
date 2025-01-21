const fs = require('fs');
const path = require('path');

/**
 * Generates Axios API functions from Swagger JSON
 * @param {object} swaggerJson - The Swagger JSON specification
 * @param {string} outputPath - Output directory for the generated file
 */
function generateAxiosApi(swaggerJson, outputPath) {
  const endpoints = Object.entries(swaggerJson.paths || {});
  const generatedCode = endpoints
    .map(([endpointPath, methods]) => {
      return Object.entries(methods).map(([method, details]) => {
        const functionName = `${method}${details.tags?.[0] || 'Endpoint'}`;
        const params = details.parameters || [];
        const queryParams = params.filter(p => p.in === 'query');
        const queryParamsCode = queryParams
          .map(p => `${p.name}: params.${p.name}`)
          .join(',\n        ');

        return `
/**
 * ${details.summary || 'API function'}
 * @param {object} params - Request parameters
 * @param {string} accessToken - Bearer token for authorization
 * @returns {Promise<any>} - API response
 */
export const ${functionName} = async (params, accessToken) => {
  try {
    const response = await axios.${method}(\`\${baseURL}${endpointPath.replace(
          /{(.+?)}/g,
          '${params.$1}'
        )}\`, {
      headers: {
        Authorization: \`Bearer \${accessToken}\`,
      },
      params: {
        ${queryParamsCode}
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error in ${functionName}:', error);
    throw error;
  }
};`;
      });
    })
    .flat()
    .join('\n');

  const finalCode = `
import axios from 'axios';

const baseURL = 'https://your-api-url.com'; // Replace with your API base URL

${generatedCode}
`;

  fs.writeFileSync(outputPath, finalCode, 'utf8');
  console.log(`Axios API functions generated successfully at: ${outputPath}`);
}

// Example Usage
const swaggerPath = path.resolve(__dirname, 'swagger.json'); // Replace with your Swagger JSON file path
const outputPath = path.resolve(__dirname, 'generatedApi.ts'); // Output file path

const swaggerJson = JSON.parse(fs.readFileSync(swaggerPath, 'utf8'));
generateAxiosApi(swaggerJson, outputPath);