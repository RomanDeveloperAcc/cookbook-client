import { TestBed } from '@angular/core/testing';
import { RecipesService } from './recipes.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RecipeDto } from "../../models/recipes/recipe.dto";
import { of } from "rxjs";
describe('RecipesService', () => {
  let service: RecipesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [RecipesService]
    });
    service = TestBed.inject(RecipesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('#setRecipeId', () => {
    it('should set recipe id', () => {
      const mockedId = 1;
      service.setRecipeId(mockedId);
      expect(service.recipeId).toEqual(mockedId);
    });
  });

  describe('#setUpdateData', () => {
    it('should set update data', () => {
      const mockedData: RecipeDto = {
        title: 'test',
        description: 'test',
      };
      service.setUpdateData(mockedData);
      expect(service.updateData).toEqual(mockedData);
    });
  });

  describe('#setUpdateId', () => {
    it('should set update id', () => {
      const mockedId = 1;
      service.setUpdateId(mockedId);
      expect(service.tempRecipeId).toEqual(mockedId);
    });
  });

  describe('#setHistoryItem', () => {
    it('should set history item to false', () => {
      const mockedValue = false;
      service.setHistoryItem(mockedValue);
      expect(service.historyItem).toEqual(mockedValue);
    });

    it('should set history item to true', () => {
      const mockedValue = true;
      service.setHistoryItem();
      expect(service.historyItem).toEqual(mockedValue);
    });
  });

  describe('#getOneHistoryRecipe', () => {
    it('should get one history recipe', () => {
      spyOn(service['http'], 'get').and.returnValue(of(true));
      service.getOneHistoryRecipe(1);
      expect(service['http'].get).toHaveBeenCalled();
    });
  });

  describe('#putRecipe', () => {
    it('should call put method of http', () => {
      spyOn(service['http'], 'put').and.returnValue(of(true));
      service.putRecipe({
        value: {
          title: 'test',
          text: 'test'
        }
      });
      expect(service['http'].put).toHaveBeenCalled();
    });
  });

  describe('#deleteRecipe', () => {
    it('should call delete method of http', () => {
      spyOn(service['http'], 'delete').and.returnValue(of(true));
      service.deleteRecipe(1);
      expect(service['http'].delete).toHaveBeenCalled();
    });
  });
});
