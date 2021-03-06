import { ForbiddenException } from '@nestjs/common';

export class RefreshTokenNotRecognizedException extends ForbiddenException {
  constructor() {
    super(`Refresh token not recognized`);
  }
}

export class InvalidRefreshTokenException extends ForbiddenException {
  constructor() {
    super(`Refresh token is invalid`);
  }
}

export class UnknownRefreshTokenException extends ForbiddenException {
  constructor() {
    super(`Refresh token is unknown for the system`);
  }
}

export class InvalidAccessTokenPayload extends ForbiddenException {
  constructor() {
    super(`Payload of access token is invalid`);
  }
}
export class InvalidAccessToken extends ForbiddenException {
  constructor() {
    super(`Access token is invalid`);
  }
}
