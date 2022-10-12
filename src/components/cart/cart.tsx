import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Cart() {
  return (
    <div>
      <button
        aria-label="cart"
        type="button"
        className="relative ml-8 h-8 w-8 p-2"
      >
        <FontAwesomeIcon icon={faCartShopping} size="sm" />
      </button>
    </div>
  );
}
