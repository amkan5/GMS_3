package com.gms.web.domain;

import org.springframework.stereotype.Component;

import lombok.Data;


@Component //빈으로쓰겠따  예전엔 @Bean으로 씀 
@Data
public class ImageDTO {
	private String imgseq,
	imgname,
	 extension,
	 memId;
	
}
