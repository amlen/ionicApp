import { Category } from './category';
import { CategoryService } from '../services/category.service';

export class Event {
    public id: number;
    public name: string;
    public description: string;
    public category: Category;

    constructor(id: number,
                name: string,
                description: string,
                category: number) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.category = new CategoryService().getCategory(category);
}
}
