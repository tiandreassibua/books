const { Book, Review } = require("../models");

const getAllBook = async (req, res, next) => {
    try {
        const books = await Book.findAll({
            include: [
                {
                    model: Review,
                    as: "reviews",
                },
            ],
        });
        res.status(200).json(books);
    } catch (error) {
        next(error);
    }
};

const getBookById = async (req, res, next) => {
    try {
        const book = await Book.findByPk(req.params.id, {
            include: [
                {
                    model: Review,
                    as: "reviews",
                },
            ],
        });

        if (!book) {
            return res.status(404).json({ message: "Book not found" });
        }

        return res.status(200).json(book);
    } catch (error) {
        next(error);
    }
};

const createBook = async (req, res, next) => {
    try {
        const book = await Book.create(req.body);
        res.status(201).json(book);
    } catch (error) {
        next(error);
    }
};

module.exports = BookController = {
    getAllBook,
    getBookById,
};
