import * as Cart from '../emitters/cart';
import { html } from 'lit-html';

export function AddToCart(productId: string, productInCart: boolean) {
  if (productInCart) {
    return;
  }
  return html` <div class="flex justify-center pt-4 pb-4">
    <button
      @click="${() => Cart.add(productId)}"
      class="bg-green-300 hover:bg-green-400 text-green-800 font-bold py-2 px-4 rounded inline-flex items-center"
    >
      <img
        class="fill-current w-6 h-6 mr-2"
        src="/node_modules/ionicons/dist/svg/add-circle-outline.svg"
        alt=""
      />
      <span>LEGG I HANDLEVOGN</span>
    </button>
  </div>`;
}
