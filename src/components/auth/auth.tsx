import { faUserAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Auth() {
  return (
    <div>
      <button type="button" className="relative h-8 w-8 p-2" aria-label="user">
        <FontAwesomeIcon icon={faUserAlt} size="sm" />
      </button>
    </div>
  );
}
