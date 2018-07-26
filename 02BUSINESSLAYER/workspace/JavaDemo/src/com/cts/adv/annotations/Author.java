package com.cts.adv.annotations;

import static java.lang.annotation.ElementType.CONSTRUCTOR;
import static java.lang.annotation.ElementType.TYPE;
import static java.lang.annotation.ElementType.FIELD;
import static java.lang.annotation.RetentionPolicy.RUNTIME;

import java.lang.annotation.Retention;
import java.lang.annotation.Target;

@Retention(RUNTIME)
@Target({ TYPE, CONSTRUCTOR, FIELD})
public @interface Author {
	String name();
	String email();
	
	public enum Type {PERMANENT, CONTRACT};
	Type type() default Type.PERMANENT;
	
}
