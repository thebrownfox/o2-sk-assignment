import "./TextInput.css";

interface TextInputProps {
    label: string;
    placeholder?: string;
    value?: string;
    onChange?: (value: string) => void;
    disabled?: boolean;
    required?: boolean;
    size?: "xs" | "s" | "m" | "l";
}

export const TextInput = ({
    label,
    placeholder,
    value,
    onChange,
    disabled = false,
    required = false,
    size = 'm',
}: TextInputProps) => {
    return (
        <div className="text-input-container">
            <label className={`label-m text-input-label`}>
                {label}
                {!required && <span className="label-s text-input-optional">Optional</span>}
            </label>
            <input
                type="text"
                value={value}
                onChange={(e) => onChange?.(e.target.value)}
                placeholder={placeholder}
                className={`text-input body-m text-input-size-${size}`}
                disabled={disabled}
            />
        </div>
    );
};