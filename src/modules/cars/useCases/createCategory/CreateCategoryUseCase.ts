import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";

interface IRequest {
    name: string;
    description: string;
}

export class CreateCategoryUseCase {
    // Pode fazer assim
    // constructor(private categoriesRepository: CategoriesRepository) {}
    // ou desta forma
    private categoriesRepository: CategoriesRepository;

    constructor(categoriesRepository: CategoriesRepository) {
        this.categoriesRepository = categoriesRepository;
    }

    execute({ name, description }: IRequest): void {
        const categoryAlreadyExists =
            this.categoriesRepository.findByName(name);

        if (categoryAlreadyExists) {
            throw new Error("Category Already exists!");
        }

        this.categoriesRepository.create({ name, description });
    }
}
