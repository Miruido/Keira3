import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { ItemEnchantmentSelectorModalComponent } from './item-enchantment-selector-modal.component';
import { ItemEnchantmentSelectorBtnComponent } from './item-enchantment-selector-btn.component';
import { HighlightjsWrapperModule } from '@keira-shared/modules/highlightjs-wrapper/highlightjs-wrapper.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ModalModule } from 'ngx-bootstrap/modal';
import { SearchButtonsModule } from '@keira-shared/modules/search-button/search-buttons.module';

@NgModule({
  declarations: [ItemEnchantmentSelectorBtnComponent, ItemEnchantmentSelectorModalComponent],
  imports: [BrowserModule, ReactiveFormsModule, NgxDatatableModule, ModalModule, HighlightjsWrapperModule, SearchButtonsModule],
  exports: [ItemEnchantmentSelectorBtnComponent],
})
export class ItemEnchantmentSelectorModule {}
