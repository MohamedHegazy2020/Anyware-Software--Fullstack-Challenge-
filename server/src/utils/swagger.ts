import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { Express } from "express";
import path from "path";

// For ts-node, these .ts paths are correct. For compiled JS, use '../dist/routes/*.js', etc.
const apis = [
  "./src/routes/*.ts",
  "./src/controllers/*.ts",
  "./src/models/*.ts",
];

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Anyware Software Task API",
      version: "1.0.0",
      description:
        "Comprehensive API documentation for the Anyware Software backend.",
    },
    servers: [
      {
        url: process.env.SWAGGER_SERVER_URL || "http://localhost:5000",
        description: "Local development server",
      },
    ],
    components: {
      schemas: {
        Quiz: {
          type: "object",
          required: ["title", "description", "questions"],
          properties: {
            id: { type: "string" },
            title: { type: "string" },
            description: { type: "string" },
            questions: {
              type: "array",
              items: {
                type: "object",
                required: ["question", "options", "answer"],
                properties: {
                  question: { type: "string" },
                  options: {
                    type: "array",
                    items: { type: "string" },
                  },
                  answer: { type: "string" },
                },
              },
            },
          },
        },
        Announcement: {
          type: "object",
          required: ["title", "description", "date"],
          properties: {
            title: {
              type: "string",
            },
            description: {
              type: "string",
            },
            date: {
              type: "string",
              format: "date",
            },
          },
        },
      },
    },
  },
  apis,
};

const swaggerSpec = swaggerJSDoc(options);

export function setupSwagger(app: Express) {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  app.get("/api-docs.json", (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.send(swaggerSpec);
  });
  console.log("✅ Swagger UI available at /api-docs");
  console.log("✅ Swagger JSON available at /api-docs.json");
}
