import {Injectable} from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {FavoriteModel} from "../models/Favorite.model";
import {ToastrService} from "ngx-toastr";

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  constructor(private afs: AngularFirestore, private toastService: ToastrService) {
  }

  async add({name, uid}: FavoriteModel) {
    try {
      await this.afs.collection('favorites').doc(uid).set({name});
    } catch (e) {
      console.error('Failed to create new favorite: ', e);
      this.toastService.error('Fehler beim Favorit hinzufügen');
    }
  }

  async delete(uid: string) {
    try {
      await this.afs.doc(`favorites/${uid}`).delete();
    } catch (e) {
      console.error('Failed to delete favorite: ', e);
      this.toastService.error('Fehler beim löschen des Favoriten');
    }
  }
}
