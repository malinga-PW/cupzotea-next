"use client"
import { ReactElement, cloneElement, useState, useEffect, useRef, isValidElement } from 'react';

interface AnimationProps {
    delay?: string;
    duration?: string;
    className?: string;
    children: ReactElement<{ 
        style?: React.CSSProperties; 
        className?: string; 
    }>;
}

const Animate: React.FC<AnimationProps> = ({ 
    delay = '0s', 
    duration = '1s', 
    className, 
    children 
}) => {
    const [isInView, setIsInView] = useState(false);
    const childRef = useRef<HTMLElement | null>(null);

    // Validate children
    if (!isValidElement(children)) {
        console.error('Animate component requires a valid React element as children');
        return <>{children}</>;
    }

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        if (childRef.current) {
            observer.observe(childRef.current);
        }

        return () => {
            observer.disconnect();
        };
    }, []);

    // Safe access to children.props with fallback
    const childProps = children.props || {};
    const childStyle = childProps.style || {};
    const childClassName = childProps.className || '';

    const style: React.CSSProperties = isInView ? {
        animationDelay: delay,
        animationDuration: duration,
        ...childStyle,
    } : { ...childStyle };

    const combinedClassName = [
        childClassName,
        isInView ? className : ''
    ].filter(Boolean).join(' ');

    // Proper ref handling
    const mergedRef = (node: HTMLElement | null) => {
        childRef.current = node;
        
        const existingRef = (children as any).ref;
        if (existingRef) {
            if (typeof existingRef === 'function') {
                existingRef(node);
            } else if (existingRef && typeof existingRef === 'object') {
                existingRef.current = node;
            }
        }
    };

    return cloneElement(children, {
        style,
        className: combinedClassName,
        ref: mergedRef,
    } as any);
};

export default Animate;