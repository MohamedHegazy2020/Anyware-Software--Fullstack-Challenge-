import { Router } from "express";
import {
  getQuizzes,
  createQuiz,
  updateQuiz,
  deleteQuiz,
} from "../controllers/quiz.controller";

const router = Router();
/**
 * @swagger
 * tags:
 *   - name: Quizzes
 *     description: Quiz management
 * /api/quizzes:
 *   get:
 *     tags: [Quizzes]
 *     summary: Get all quizzes
 *     description: Returns a list of all quizzes
 *     responses:
 *       200:
 *         description: A list of quizzes
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Quiz'
 *   post:
 *     tags: [Quizzes]
 *     summary: Create a new quiz
 *     description: Creates a new quiz with the given title, description, and questions
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Quiz'
 *     responses:
 *       201:
 *         description: Quiz created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Quiz'
 *       400:
 *         description: Bad request
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 * /api/quizzes/{id}:
 *   put:
 *     tags: [Quizzes]
 *     summary: Update a quiz
 *     description: Updates a quiz with the given ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The ID of the quiz to update
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Quiz'
 *     responses:
 *       200:
 *         description: Quiz updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Quiz'
 *       400:
 *         description: Bad request
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *       404:
 *         description: Quiz not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *   delete:
 *     tags: [Quizzes]
 *     summary: Delete a quiz
 *     description: Deletes a quiz with the given ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The ID of the quiz to delete
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Quiz deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *       404:
 *         description: Quiz not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 */

router.get("/", getQuizzes);
router.post("/", createQuiz);

router.put("/:id", updateQuiz);
router.delete("/:id", deleteQuiz);

export default router;
