import { VisiteurService } from '../services/Visiteur';
import { VisiteurModel } from '../models/Visiteur';
import { ICreateVisiteur } from '../models/interfaces/IVisiteur';


describe('VisiteurService.createVisiteur', () => {
  let service: VisiteurService;


  beforeEach(() => {
    service = new VisiteurService();
    jest.clearAllMocks();
  });


  describe('Création d\'un visiteur réussie', () => {
    test('crée un visiteur si email libre et données valides', async () => {
      // ARRANGE
      const visiteurData:  ICreateVisiteur = {
        nom: 'Dupont',
        prenom: 'Marie',
        email: 'marie.dupont@test.com',
        tel: '0612345678'
      };


      const expectedVisiteur = {
        ...visiteurData,
        _id: '507f1f77bcf86cd799439011',
        createdAt: new Date(),
        updatedAt:  new Date()
      };


      // Mock findOne :  email n'existe pas
      (VisiteurModel.findOne as jest.Mock).mockResolvedValue(null);


      // Mock constructeur et save
      const mockVisiteurInstance = {
        ... expectedVisiteur,
        save: jest.fn().mockResolvedValue(expectedVisiteur)
      };


   (VisiteurModel as any).mockImplementation(() => mockVisiteurInstance);


      // ACT
      const result = await service.createVisiteur(visiteurData);


      // ASSERT
      expect(result).toBeDefined();
      expect(result.email).toBe('marie.dupont@test.com');
      expect(VisiteurModel.findOne).toHaveBeenCalledWith({ email: 'marie.dupont@test.com' });
      expect(mockVisiteurInstance.save).toHaveBeenCalled();
    });
  });
});
