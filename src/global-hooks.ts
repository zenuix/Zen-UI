import { useEffect } from 'react';

/**
 * useEscapeKey
 * Escape 키를 눌렀을 때 onClose 함수를 실행하는 훅입니다.
 * @param {Function} onClose - Escape 키가 눌렸을 때 실행될 함수입니다.
 * @param {boolean} enabled - 훅이 활성화될지 여부를 결정합니다.
 */
export const useEscapeKey = (onClose?: () => void, enabled: boolean = true) => {
  useEffect(() => {
    if (!enabled || !onClose) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [onClose, enabled]);
};

/**
 * useFocusTrap
 * 지정한 요소 내부에서 포커스가 순환되도록 트랩(focus trap)하는 훅입니다.
 * 모달 등의 컴포넌트에서 키보드 접근성을 개선하기 위해 사용됩니다.
 * @param {Object} elementRef - 포커스 트랩을 적용할 DOM 요소의 ref 객체입니다.
 * @param {boolean} isOpen - 요소가 활성화되었는지를 나타내며, false이면 포커스 트랩을 실행하지 않습니다.
 */
export const useFocusTrap = (elementRef: React.RefObject<HTMLElement | null>, isOpen: boolean) => {
  useEffect(() => {
    if (!isOpen || elementRef.current === null) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Tab') {
        const focusableElements = elementRef.current!.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const firstElement = focusableElements[0] as HTMLElement;
        const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

        if (event.shiftKey) {
          // Shift + Tab -> 첫 번째 요소에서 마지막 요소로 이동
          if (document.activeElement === firstElement) {
            event.preventDefault();
            lastElement.focus();
          }
        } else {
          // Tab -> 마지막 요소에서 첫 번째 요소로 이동
          if (document.activeElement === lastElement) {
            event.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [elementRef, isOpen]);
};

/**
 * useOutsideClick
 * 지정한 요소 외부를 클릭했을 때 callback 함수를 실행하는 훅입니다.
 * @param {Object} elementRef - 외부 클릭 여부를 판단할 DOM 요소의 ref 객체입니다.
 * @param {Function} callback - 외부 클릭이 감지되었을 때 실행될 함수입니다.
 */
export const useOutsideClick = (elementRef: React.RefObject<HTMLElement | null>, callback: () => void) => {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (elementRef.current && !elementRef.current.contains(event.target as Node)) {
        callback();
      }
    };

    document.addEventListener('mousedown', handleClick);
    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, [elementRef, callback]);
};
