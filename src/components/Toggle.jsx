
import './Toggle.css'

export const Toggle = ({ handlecheck, isChecked }) => {

    return (
        <div className="toggle-container">
            <input
                type="checkbox"
                id="check"
                className="toggle"
                onChange={handlecheck}
                checked={isChecked}
            />
            <label htmlFor="check" className="theme-label">Dark mode</label>
        </div>
    );
}


